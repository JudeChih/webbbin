<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class rentSearch_Project extends Model
{

    public static $pd_rwd = 1;

    protected $connection = 'mysql_websitecollect';
    /**
     * 資料表名稱
     * @var string
     */
    protected $table = 'projects';

    /**
     * 主鍵值
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * 是否自動遞增
     * @var string
     */
    public $incrementing = true;

    /**
     * 是否自動插入現在時間
     *
     * @var bool
     */
    public $timestamps = false;
}
