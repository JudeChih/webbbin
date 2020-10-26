<?php

use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'pd_id' => $faker->numberBetween($min = 0, $max = 1) ,
        'ud_id' => $faker->numberBetween($min = 0, $max = 1) ,
        'tr_action' => $faker->numberBetween($min = 0, $max = 1) ,
        'tr_user' => $faker->text($maxNbChars = 50),
    ];
});
