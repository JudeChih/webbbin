<?php

use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'sp_paramatertype' => $faker->numberBetween($min = 0, $max = 1) ,
        'sp_parameterkey' => $faker->text($maxNbChars = 100),
        'sp_parametervalue' => $faker->text($maxNbChars = 100),
        'sp_paramaterdescribe' => $faker->text($maxNbChars = 100),
    ];
});
