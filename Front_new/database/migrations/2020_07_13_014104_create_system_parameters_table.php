<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSystemParametersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wms_systemparameter', function (Blueprint $table) {
            $table->increments('sp_id');
            $table->tinyInteger('sp_paramatertype');
            $table->string('sp_parameterkey', 100);
            $table->string('sp_parametervalue', 100);
            $table->string('sp_paramaterdescribe', 500);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wms_systemparameter');
    }
}
