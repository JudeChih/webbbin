<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LogoData extends Model {

    /**
     * 資料表名稱
     * @var string
     */
    protected $table = 'wms_logodata';

    /**
     * 主鍵值
     * @var string
     */
    protected $primaryKey = 'ld_id';

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
        'ld_name', 'ld_img', 'ld_casino', 'ld_sports', 'ld_card', 'ld_live', 'ld_lottery', 'ld_fishing', 'ld_mahjong'
    ];

}