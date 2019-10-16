<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->char('num')->nullable();
            $table->date('edit_dt')->nullable();            
            $table->boolean('isShow')->default(true);;
            $table->boolean('isNew')->default(false);;
            $table->boolean('isHot')->default(false);;
            $table->boolean('isLive')->default(false);;
            $table->boolean('isRWD')->default(false);;
            $table->boolean('desktopChecked')->default(true);;
            $table->boolean('tabletChecked')->default(false);;
            $table->boolean('mobileChecked')->default(false);;
            $table->integer('layout')->nullable();
            $table->integer('style')->nullable();
            $table->string('colors');
            $table->string('imgView');
            $table->string('imgBanner');
            $table->string('imgExample')->nullable();
            $table->string('notices');
            $table->string('imgExampleName')->nullable();
            
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
        Schema::dropIfExists('projects');
    }
}
