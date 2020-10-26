<?php
namespace Tests\Repository;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\LogoData;
use Tests\TestCase;

class LogoDataRepositoryTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function getAllDataNew(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(LogoData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = LogoData::all();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertCount(10, $data);
    }

    /** @test */
    public function getBbinData(){
        // return LogoData::where('isflag',1)->where('ld_name','bbin')->get();
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(LogoData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = LogoData::all();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertCount(10, $data);
    }

}