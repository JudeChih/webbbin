<?php

use Faker\Generator as Faker;

$factory->define(App\Models\ProjectData::class, function (Faker $faker) {
    return [
        'pd_num' => $faker->text($maxNbChars = 200) ,
        'pd_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'pd_show' => $faker->numberBetween($min = 0, $max = 1),
        'pd_new' => $faker->numberBetween($min = 0, $max = 1),
        'pd_hot' => $faker->numberBetween($min = 0, $max = 1),
        'pd_live' => $faker->numberBetween($min = 0, $max = 1),
        'pd_rwd' => $faker->numberBetween($min = 0, $max = 1),
        'pd_desktop_check' => $faker->numberBetween($min = 0, $max = 1),
        'pd_tablet_check' => $faker->numberBetween($min = 0, $max = 1),
        'pd_mobile_check' => $faker->numberBetween($min = 0, $max = 1),
        'pd_layout' => $faker->numberBetween($min = 0, $max = 1),
        'pd_style' => $faker->numberBetween($min = 0, $max = 1),
        'pd_colors' => $faker->text($maxNbChars = 200) ,
        'pd_view_img' => $faker->text($maxNbChars = 200) ,
        'pd_banner_img' => $faker->text($maxNbChars = 200) ,
        'pd_notices' => $faker->text($maxNbChars = 200),

    ];
});
