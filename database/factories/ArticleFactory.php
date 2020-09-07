<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Models\User;
use Faker\Generator as Faker;

$factory->define(App\Article::class, function (Faker $faker) {
    return [
        'title' => $faker->text(30),
        'body' => $faker->text(100),
        'posted_at' => $faker->date(),
        'user_id' => function() {
            return factory(App\User::class)->create()->id;
        }
    ];
});
