<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wms_userdata', function (Blueprint $table) {
            $table->increments('ud_id');
            $table->tinyInteger('ud_status');
            $table->tinyInteger('ud_admin');
            $table->string('ud_account', 50);
            $table->string('ud_password', 50);
            $table->timestamp('ud_last_login');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wms_userdata');
    }
}
