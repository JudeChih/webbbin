<?php
namespace Tests\Repository;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\ErrorLog;
use Tests\TestCase;

class ErrorLogRepositoryTest extends TestCase
{
    use RefreshDatabase;
    
    /** @test */
    public function create()
    {
        
        $first = factory(ErrorLog::class,1)->create();
        
        $logs = ErrorLog::all();

        $this->assertCount(1, $logs);
    }

}