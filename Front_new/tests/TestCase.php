<?php

namespace Tests;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

class TestCase extends BaseTestCase
{
    use CreatesApplication;
    // 每個 test case 都會重新初始化資料庫
    protected function initDatabase(){
        // 在測試時動態修改 config
        // 使其連接 sqlite
        config([
            'database.default' => 'sqlite',
            'database.connections.sqlite' => [
                'driver'    => 'sqlite',
                'database'  => ':memory:',
                'prefix'    => '',
            ],
        ]);

        // 呼叫 php artisan migrate
        // 及 php artisan db:seed
        Artisan::call('migrate');
        Artisan::call('db:seed');
    }

    // 重置資料庫
    // 讓下次測試不會被舊資料干擾
    // protected function resetDatabase(){
    //     // 呼叫 php artisan migrate:reset
    //     // 這樣會把所有的 migration 清除
    //     Artisan::call('migrate:reset');
    //     parent::resetDatabase();
    // }

}
