<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserData extends Model {

    /**
     * 資料表名稱
     * @var string
     */
    protected $table = 'wms_userdata';

    /**
     * 主鍵值
     * @var string
     */
    protected $primaryKey = 'ud_id';

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
        'ud_name', 'ud_status', 'ud_admin', 'ud_account', 'ud_password', 'ud_last_login'
    ];
}