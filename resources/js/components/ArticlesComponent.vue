<template>
    <div>
        <h1 class="mb-5 mt-5 pb-5 pt-5 text-center">Articles</h1>
        <div v-for="article in articles.slice(0, 1)" v-bind:key="article.id" class="card card-body mb-2 p-0">
            <div class="row m-0">
                <div class="align-self-center col-6 text-center p-5">
                    <span class="date">{{ article.posted_at }}</span>
                    <h3>{{ article.title }}</h3>
                    <p v-html="article.body"></p>
                </div>
                <div v-if="article.image" class="col-6 p-0">
                    <img :src="article.image" alt="">
                </div>
            </div>
        </div>
        <div class="grid">
            <div v-for="article in articles.slice(1)" v-bind:key="article.id" class="card card-body mb-2 p-0">
                <div class="row m-0">
                    <div v-if="article.image" class="col-12 p-0">
                        <img :src="article.image" alt="">
                    </div>
                </div>
                <div class="row m-0">
                    <div class="align-self-center col-12 text-center p-4">
                        <span class="date">{{ article.posted_at }}</span>
                        <h3>{{ article.title }}</h3>
                        <p v-html="article.body"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    console.log("wtf22")
    export default {
        data() {
            return {
                article: {
                    title: '',
                    body: '',
                    image: '',
                    posted_at: ''
                },
                articles: [],
                pagination: {},
                edit: false
            }
        },
        created() {
            this.fetchArticles()
        },
        methods: {
            fetchArticles () {
                fetch('/api/articles')
                    .then(res => res.json())
                    .then(res => {
                        const data = res.data.map(obj => {
                            const $body = jQuery('<div>' + obj.body + '</div>');
                            const $first = $body.find('img').first();
                            obj.image = $first.attr('src') || '';
                            $first.remove();
                            obj.body = $body.text().replace(/(?<=^[\s\S]{100}[\s\S]*?) [\s\S]+/, '...');
                            return obj;
                        });
                        console.log(data);
                        this.articles = data;
                    })
            }
        }
    }

</script>