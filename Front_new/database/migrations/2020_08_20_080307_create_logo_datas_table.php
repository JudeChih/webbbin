<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLogoDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wms_logodata', function (Blueprint $table) {
            $table->increments('ld_id');
            $table->string('ld_name', 200);
            $table->longtext('ld_img');
            $table->tinyInteger('ld_casino')->nullable()->default('0');
            $table->tinyInteger('ld_sports')->nullable()->default('0');
            $table->tinyInteger('ld_card')->nullable()->default('0');
            $table->tinyInteger('ld_live')->nullable()->default('0');
            $table->tinyInteger('ld_lottery')->nullable()->default('0');
            $table->tinyInteger('ld_fishing')->nullable()->default('0');
            $table->tinyInteger('ld_mahjong')->nullable()->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wms_logodata');
    }
}
