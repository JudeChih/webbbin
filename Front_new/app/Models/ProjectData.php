<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectData extends Model
{
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

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // 定義當使用 __construct($data) 或 create($data) 時
    // 可以被修改的欄位，進而保護其他欄位不被修改
    protected $fillable = [
        'pd_num', 'pd_date', 'pd_show', 'pd_new', 'pd_hot', 'pd_live', 'pd_rwd', 'pd_desktop_check', 'pd_tablet_check', 'pd_mobile_check', 'pd_layout', 'pd_style', 'pd_colors', 'pd_view_img', 'pd_banner_img', 'pd_notices'
    ];
}
