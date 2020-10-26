<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ErrorLog extends Model
{
    /**
     * 資料表名稱
     * @var string
     */
    protected $table = 'errorlog';

    /**
     * 主鍵值
     * @var string
     */
    protected $primaryKey = 'log_id';

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
        'log_time', 'log_code', 'log_message', 'log_previous', 'log_file', 'log_line', 'log_trace', 'log_traceasstring'
    ];

}
