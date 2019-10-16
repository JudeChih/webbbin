<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\itemView;


class Project extends Model
{
    use itemView;
    public static $columns = [
        'pd_id', 'pd_num', 'pd_date',
        'create_date', 'last_update_date'
    ];
    public static $pd_rwd = 1;

    protected $connection = 'mysql';
    /**
     * 資料表名稱
     * @var string
     */
    protected $table = 'wms_projectdata';

    /**
     * 主鍵值
     * @var string
     */
    protected $primaryKey = 'pd_id';

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
