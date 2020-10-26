<?php

use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'ud_name' => $faker->text($maxNbChars = 50),
        'ud_status' => $faker->numberBetween($min = 0, $max = 1) ,
        'ud_admin' => $faker->numberBetween($min = 0, $max = 1) ,
        'ud_account' => $faker->text($maxNbChars = 50),
        'ud_password' => $faker->text($maxNbChars = 50),
        $table->timestamp('log_time'),
        'ud_last_login' => $faker->dateTime($max = 'now', $timezone = null)
    ];
});
