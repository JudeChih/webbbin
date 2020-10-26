<?php

use Faker\Generator as Faker;

$factory->define(App\Models\ErrorLog::class, function (Faker $faker) {
    return [
        'log_time' => $faker->dateTime($max = 'now', $timezone = null),
        'log_code' => $faker->realText(200),
        'log_message' => $faker->realText(200),
        'log_previous' => $faker->realText(200),
        'log_file' => $faker->title(10),
        'log_line' => $faker->realText(200),
        'log_trace' => $faker->realText(200),
        'log_traceasstring' => $faker->realText(200)
    ];
});
