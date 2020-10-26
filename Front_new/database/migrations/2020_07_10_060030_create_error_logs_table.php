<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateErrorLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('errorlog', function (Blueprint $table) {
            $table->increments('log_id');
            $table->timestamp('log_time');
            $table->text('log_code');
            $table->text('log_message');
            $table->text('log_previous');
            $table->text('log_file');
            $table->text('log_line');
            $table->text('log_trace');
            $table->text('log_traceasstring');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('errorlog');
    }
}
