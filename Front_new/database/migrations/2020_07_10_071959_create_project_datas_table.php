<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wms_projectdata', function (Blueprint $table) {
            $table->increments('pd_id');
            $table->string('pd_num', 200);
            $table->date('pd_date');
            $table->tinyInteger('pd_show');
            $table->tinyInteger('pd_new');
            $table->tinyInteger('pd_hot');
            $table->tinyInteger('pd_hot_top')->nullable()->default('0');
            $table->tinyInteger('pd_live');
            $table->string('pd_live_url', 200)->nullable();
            $table->tinyInteger('pd_rwd');
            $table->tinyInteger('pd_desktop_check');
            $table->tinyInteger('pd_tablet_check');
            $table->tinyInteger('pd_mobile_check');
            $table->tinyInteger('pd_layout');
            $table->tinyInteger('pd_style');
            $table->string('pd_colors', 200);
            $table->tinyInteger('pd_type')->nullable()->default('0');
            $table->string('pd_view_img', 200);
            $table->text('pd_banner_img');
            $table->text('pd_template_img')->nullable();
            $table->text('pd_model_img')->nullable();
            $table->text('pd_notices')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wms_projectdata');
    }
}
