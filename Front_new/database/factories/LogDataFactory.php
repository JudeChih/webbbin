<?php

use Faker\Generator as Faker;

$factory->define(App\Models\LogoData::class, function (Faker $faker) {
    return [
        'ld_name' => $faker->text($maxNbChars = 200),
        'ld_img' => $faker->text($maxNbChars = 200),
        'ld_casino' => $faker->numberBetween($min = 0, $max = 1),
        'ld_sports' => $faker->numberBetween($min = 0, $max = 1),
        'ld_card' => $faker->numberBetween($min = 0, $max = 1),
        'ld_live' => $faker->numberBetween($min = 0, $max = 1),
        'ld_lottery' => $faker->numberBetween($min = 0, $max = 1),
        'ld_fishing' => $faker->numberBetween($min = 0, $max = 1),
        'ld_mahjong' => $faker->numberBetween($min = 0, $max = 1),
    ];
});
