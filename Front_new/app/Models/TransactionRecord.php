<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransactionRecord extends Model {

    /**
     * 資料表名稱
     * @var string
     */
    protected $table = 'wms_transaction_record';

    /**
     * 主鍵值
     * @var string
     */
    protected $primaryKey = 'tr_id';

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
        'pd_id', 'ud_id', 'tr_action', 'tr_user'
    ];
}