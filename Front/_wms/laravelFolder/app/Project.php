<?php

namespace App;

// use Illuminate\Database\Eloquent\Model;
use App\Helper\itemView;


class Project extends Model
{
    use itemView;
    public static $columns = [
        'id', 'num', 'edit_dt',
        'created_at', 'updated_at'
    ];
    public static $isRWD = 1;
}
