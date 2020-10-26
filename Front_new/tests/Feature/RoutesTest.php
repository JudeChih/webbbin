<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class RoutesTest extends TestCase
{
    /**
     * 回首頁
     */
    /** @test */
    public function routesTestOne()
    {
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        
        
        // When 當發生了什麼動作，也就是 action
        $response = $this->get('/');

        // Then 預期有什麼樣的結果，也就是 assert
        $response->assertStatus(200);
        $response->assertSee('BBIN');
        
    }

    /**
     * 回首頁
     */
    /** @test */
    public function routesTestTwo()
    {
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        
        
        // When 當發生了什麼動作，也就是 action
        $response = $this->get('/index');

        // Then 預期有什麼樣的結果，也就是 assert
        $response->assertStatus(200);
        $response->assertSee('BBIN');
        
    }

    /**
     * 某版型細節頁
     */
    /** @test */
    public function routesTestThree()
    {
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        
        
        // When 當發生了什麼動作，也就是 action
        $response = $this->get('/detail/1');

        // Then 預期有什麼樣的結果，也就是 assert
        $response->assertStatus(200);
        // $response->assertSee('LIVE DEMO');

    }

    /**
     * 某版型demo頁
     */
    /** @test */
    public function routesTestFour()
    {
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        
        
        // When 當發生了什麼動作，也就是 action
        $response = $this->get('/demo/1');

        // Then 預期有什麼樣的結果，也就是 assert
        $response->assertStatus(200);
        // $response->assertSee('BBIN');
        
    }
}
