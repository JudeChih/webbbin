<?php
namespace Tests\Repository;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\ProjectData;
use DB;
use Tests\TestCase;

// 一樣要先繼承
class ProjectDataRepositoryTest extends TestCase
{
    use RefreshDatabase;
    
    /**
     * 根據傳入值抓取符合的資料
     * @param  [type] $arraydata [搜尋條件]
     */
    /** @test */
    public function getAllData($arraydata = null){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::all();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertCount(10, $data);
    }

    /** @test */
    public function getAllDataNew(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',0)->get();

        echo $data;

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertArrayHasKey('pd_rwd', $data);
    }

    /**
     * 透過網版編號取得相符的資料
     * @param  [string] $pd_id [網版編號]
     */
    /** @test */
    public function getDataById($pd_id = null){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_id',1)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 透過網版編號取得相符的資料
     * @param  [string] $pd_id [網版編號]
     */
    /** @test */
    public function getPrevDataById($pd_id = null){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $pd_id = 5;
        $data = ProjectData::where("pd_id",'<',$pd_id)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 透過網版編號取得相符的資料
     * @param  [string] $pd_id [網版編號]
     */
    /** @test */
    public function getNextDataById($pd_id = null){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $pd_id = 2;
        $data = ProjectData::where("pd_id",'>',$pd_id)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得最後一筆網版資料
     */
    /** @test */
    public function getLastData(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::orderBy('pd_id','DESC')->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得第一筆網版資料
     */
    /** @test */
    public function getFirstData(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 透過網版名稱取得相符的資料
     * @param  [string] $pd_num [網版名稱]
     */
    /** @test */
    public function getDataByNum($pd_num = null){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 透過線上Demo取得相符的資料
     * @param  [stering] $pd_live [是否有線上Demo]
     */
    /** @test */
    public function getDataByLive($pd_live = null){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where("pd_live",1)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 透過熱門版型取得相符的RWD資料
     */
    /** @test */
    public function getDataByHotIsRwd(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where("pd_hot",1)->where('pd_rwd',1)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 透過熱門版型取得相符的資料
     */
    /** @test */
    public function getDataByHotIsAdaptive(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where("pd_hot",1)->where('pd_rwd',0)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 選取不熱門的版型
     */
    /** @test */
    public function getDataByNotHot($pd_rwd = null){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where("pd_hot",0)->where('pd_rwd',0)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 透過傳入的id以及num抓取符合的網版資料
     * @param  [string] $pd_id  [網版編號]
     * @param  [string] $pd_num [網版名稱]
     */
    /** @test */
    public function getDataByIdNum($pd_id = null,$pd_num = null){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where("pd_id","!=",2)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 抓取全部網版的pd_id和pd_num
     */
    /** @test */
    public function getIdNum(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::select('pd_id','pd_num','pd_rwd')->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得固定網版的資料，取得總數
     */
    /** @test */
    public function getAdaptiveCount(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',0)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得固定網版的資料，取得總數
     */
    /** @test */
    public function getRwdCount(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',1)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 抓取上周新增的固定網版總數
     */
    /** @test */
    public function getAdaptiveBetweenLastWeek(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',0)->whereBetween('create_date', array(\Carbon\Carbon::parse('last saturday')->subDays(6)->toDateTimeString(),\Carbon\Carbon::parse('last saturday')->toDateTimeString()))->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 抓取上周新增的RWD網版總數
     */
    /** @test */
    public function getRwdBetweenLastWeek(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',1)->whereBetween('create_date', array(\Carbon\Carbon::parse('last saturday')->subDays(6)->toDateTimeString(),\Carbon\Carbon::parse('last saturday')->toDateTimeString()))->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得最近新增的三筆固定網版資料
     */
    /** @test */
    public function getThreeLatestAdaptiveData(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',0)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得最近新增的三筆RWD網版資料
     */
    /** @test */
    public function getThreeLatestRwdData(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',1)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得熱門排行推薦
     */
    /** @test */
    public function getAdaptiveDataByTop10(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',0)->where("pd_hot",0)->where('pd_hot_top',1)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得不是熱門排行推薦的熱門排行
     */
    /** @test */
    public function getAdaptiveDataByNotTop10(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',0)->where("pd_hot",0)->where('pd_hot_top',0)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得熱門排行屬於固定版型的資料
     */
    /** @test */
    public function getAllAdaptiveData(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',0)->where("pd_hot",1)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得熱門排行推薦
     */
    /** @test */
    public function getRwdDataByTop10(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',1)->where('pd_hot',1)->where('pd_hot_top',1)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得不是熱門排行推薦的熱門排行
     */
    /** @test */
    public function getRwdDataByNotTop10(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',1)->where('pd_hot',1)->where('pd_hot_top',0)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 取得熱門排行屬於固定版型的資料
     */
    /** @test */
    public function getAllRwdData(){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_rwd',1)->where('pd_hot',1)->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 隨機抓取熱門版型10個
     * @param  [type] $pd_rwd [description]
     * @return [type]         [description]
     */
    /** @test */
    public function getHotDataByRwdInRandom($pd_rwd = null){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,10)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::where('pd_hot',1)->orderBy(DB::raw('RAND()'))->count();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data);
    }

    /**
     * 新增網版資料，並且回傳pd_id
     * @param  [array]  $arraydata [網版資料]
     * @return [string] $pd_id     [網版編號]
     */
    /** @test */
    public function createGetId($arraydata = null){
        // 所謂的 Given When Then
        // Given 代表在什麼前提、環境下，也就是 arrange
        $first = factory(ProjectData::class,1)->create();

        // When 當發生了什麼動作，也就是 action
        $data = ProjectData::all();

        // Then 預期有什麼樣的結果，也就是 assert
        $this->assertInternalType("int", $data[0]->pd_id);
    }
}