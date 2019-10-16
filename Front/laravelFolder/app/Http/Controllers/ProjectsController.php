<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Project;
use App\rentSearch_Project;
use App\SystemParameter;
use DB;

class ProjectsController extends Controller
{
    public function index(Request $request)
    {
        $projects = Project::all();
        return $projects;
    }

    public function getData()
    {
        $pd_r = new \App\Repositories\ProjectDataRepository;
        $model = Project::searchPaginateAndOrder();
        $columns = Project::$columns;
        $system = SystemParameter::where('sp_parameterkey','熱門排行-固定版型')->orWhere('sp_parameterkey','熱門排行-RWD')->get();
        foreach($system as $val){
            if($val['sp_parameterkey'] == '熱門排行-固定版型'){
                if($val['sp_parametervalue'] == 2){
                    $adaptive = $pd_r->getHotDataByRwdInRandom(0);
                }else{
                    $adaptive = $pd_r->getDataWithoutTheSamePdId(0);
                }
            }elseif($val['sp_parameterkey'] == '熱門排行-RWD'){
                if($val['sp_parametervalue'] == 2){
                    $rwd = $pd_r->getHotDataByRwdInRandom(1);
                }else{
                    $rwd = $pd_r->getDataWithoutTheSamePdId(1);
                }
            }
        }
        // \App\Library\CommonTools::writeErrorLogByMessage('row-35');
        // \App\Library\CommonTools::writeErrorLogByMessage(json_encode($rwd));
        // \App\Library\CommonTools::writeErrorLogByMessage(json_encode($adaptive));
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns,
                'system' => $system,
                'hot_adaptive' => $adaptive,
                'hot_rwd' => $rwd,
            ]);
    }

     public function show($id)
    {
        $projects = Project::find($id);
        return response()->json($projects);
        // return view('itemEdit', compact('projects'));
    }
     public function update(Request $request, $id)
    {
        $Project = new Project;
        // HTML require
        $this->validate(request(),[
            'pd_num' => 'required|nullable',
            'pd_date' => 'required',
            'pd_notices' => 'nullable',
            'pd_colors' => 'required',
            'pd_template_img' => 'nullable',
            'pd_show' => 'required|boolean',
            'pd_new' => 'required|boolean',
            'pd_hot' => 'required|boolean',
            'pd_live' => 'required|boolean',
            'pd_rwd' => 'required|boolean',
            'pd_layout' => 'required|nullable',
            'pd_style' => 'required|nullable',
            'pd_view_img' => 'required',
            'pd_banner_img' => 'required',
            // 'imgExampleName' => 'nullable',
            'pd_desktop_check' => 'required|boolean',
            'pd_tablet_check' => 'required|boolean',
            'pd_mobile_check' => 'required|boolean',

        ]);

        // $edit = Project::find($id)->update($request->all());
        $edit = Project::find($id)->update([
            'pd_num' => request('pd_num'),
            'pd_date' => request('pd_date'),
            'pd_notices' => json_encode(request('pd_notices')),
            'pd_colors' => json_encode(request('pd_colors')),
            'pd_template_img' => json_encode(request('pd_template_img')),
            'pd_show' => request('pd_show'),
            'pd_new' => request('pd_new'),
            'pd_hot' => request('pd_hot'),
            'pd_live' => request('pd_live'),
            'pd_rwd' => request('pd_rwd'),
            'pd_layout' => request('pd_layout'),
            'pd_style' => request('pd_style'),
            'pd_view_img' => request('pd_view_img'),
            'pd_banner_img' => request('pd_banner_img'),
            // 'imgExampleName' => json_encode(request('imgExampleName')),
            'pd_desktop_check' => request('pd_desktop_check'),
            'pd_tablet_check' => request('pd_tablet_check'),
            'pd_mobile_check' => request('pd_mobile_check'),
        ]);
        return response()->json($edit);
        // return ['message' => 'Project Update!'];
    }

    public function getItemModel($pd_id){
        if(!$item = rentSearch_Project::where('pd_id',$pd_id)->get()){
            return response()->json(false);
        }
        return response()->json($item);
    }

    /**
     * RWD版型會call的function，獲取示意圖，有三種Desktop,Mobile,Tablet
     * @param  [string] $num  [版型名稱]
     * @param  [string] $type [類型]
     */
    public function rwdGetImageUrl($num,$type){
        $pd_r = new \App\Repositories\ProjectDataRepository;
        try {
            if($num){
                if(!$templatedata = $pd_r->getDataByNum($num)){
                    return false;
                }else{
                    $templatedata = $templatedata[0];
                }
            }else{
                return false;
            }
            $img = $templatedata['pd_template_img'];
            // \App\Library\CommonTools::writeErrorLogByMessage('img::'.$img);
            $img = json_decode($img);
            if(count($img) > 0){
                $desktop = array();
                $mobile = array();
                $tablet = array();
                foreach ($img as $val) {
                    if(strpos($val,'Desktop')){
                        array_push($desktop,$val);
                    }elseif(strpos($val,'Mobile')){
                        array_push($mobile,$val);
                    }elseif(strpos($val,'Tablet')){
                        array_push($tablet,$val);
                    }
                }
            }

            if($type == 'Desktop'){

                return response()
                        ->json([
                            'data' => $desktop
                        ]);
            }elseif($type == 'Mobile'){
                return response()
                        ->json([
                            'data' => $mobile
                        ]);
            }elseif($type == 'Tablet'){
                return response()
                        ->json([
                            'data' => $tablet
                        ]);
            }else{
                return false;
            }
        } catch (\Exception $e) {
            CommonTools::writeErrorLogByException($e);
            return false;
        }
    }
}