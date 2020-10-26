<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wms_transaction_record', function (Blueprint $table) {
            $table->increments('tr_id');
            $table->integer('pd_id');
            $table->integer('ud_id');
            $table->integer('tr_action');
            $table->string('tr_user', 50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wms_transaction_record');
    }
}
