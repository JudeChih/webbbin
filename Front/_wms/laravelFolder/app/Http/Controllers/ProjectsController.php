<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Project;

class ProjectsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $projects = Project::all();
        return $projects;
        // $colors = Project::all()->pluck('colors');
        // $response = [
        //     'projects' => $projects,
        //     'colors ' => $colors 
        // ];
        // return response()->json($response);
        
    }

    public function create()
    {
        return view('itemAdd');
    }

    public function store(Request $request)
    {

        // Create a new Project using the request data
        $Project = new Project;

        // app/HTTP/Project.php > app/HTTP/Model.php
        // Project::create($request->all());
       

        // HTML require
        $this->validate(request(),[
            'num' => 'required|nullable',
            'edit_dt' => 'required',
            'notices' => 'nullable',
            'colors' => 'required',
            'imgExample' => 'nullable',
            'isShow' => 'required|boolean',
            'isNew' => 'required|boolean',
            'isHot' => 'required|boolean',
            'isLive' => 'required|boolean',
            'isRWD' => 'required|boolean',
            'layout' => 'required|nullable',
            'style' => 'required|nullable',
            'imgView' => 'required',
            'imgBanner' => 'required',
            'imgExampleName' => 'nullable',
            'desktopChecked' => 'required|boolean',
            'tabletChecked' => 'required|boolean',
            'mobileChecked' => 'required|boolean',

        ]);

        // And then redirect to the home page.
        // $create = Project::create($request->all());

        $create = Project::create([
            'num' => request('num'),
            'edit_dt' => request('edit_dt'),
            'notices' => json_encode(request('notices')),
            'colors' => json_encode(request('colors')),
            'imgExample' => json_encode(request('imgExample')),
            'isShow' => request('isShow'),
            'isNew' => request('isNew'),
            'isHot' => request('isHot'),
            'isLive' => request('isLive'),
            'isRWD' => request('isRWD'),
            'layout' => request('layout'),
            'style' => request('style'),
            'imgView' => request('imgView'),
            'imgBanner' => request('imgBanner'),
            'imgExampleName' => json_encode(request('imgExampleName')),
            'desktopChecked' => request('desktopChecked'),
            'tabletChecked' => request('tabletChecked'),
            'mobileChecked' => request('mobileChecked'),

        ]);
        
        // return back();
        return response()->json($create);
        // return ['message' => 'Project Created!'];
    }

    
    // public function edit($id)
    // {
    //     $projects = Project::find($id);
    //     return response()->json($projects);
    // }

    public function show($id)
    {
        $projects = Project::find($id);
        return response()->json($projects);
        // return view('itemEdit', compact('projects'));
    }

    public function destroy($id)
    {
        Project::where('id', $id)->delete();
        // return view('welcome');
        // // return back();
        return response()->json(['done']);

    }

    public function update(Request $request, $id)
    {
        $Project = new Project;
        // HTML require
        $this->validate(request(),[
            'num' => 'required|nullable',
            'edit_dt' => 'required',
            'notices' => 'nullable',
            'colors' => 'required',
            'imgExample' => 'nullable',
            'isShow' => 'required|boolean',
            'isNew' => 'required|boolean',
            'isHot' => 'required|boolean',
            'isLive' => 'required|boolean',
            'isRWD' => 'required|boolean',
            'layout' => 'required|nullable',
            'style' => 'required|nullable',
            'imgView' => 'required',
            'imgBanner' => 'required',
            'imgExampleName' => 'nullable',
            'desktopChecked' => 'required|boolean',
            'tabletChecked' => 'required|boolean',
            'mobileChecked' => 'required|boolean',

        ]);

        // $edit = Project::find($id)->update($request->all());
        $edit = Project::find($id)->update([
            'num' => request('num'),
            'edit_dt' => request('edit_dt'),
            'notices' => json_encode(request('notices')),
            'colors' => json_encode(request('colors')),
            'imgExample' => json_encode(request('imgExample')),
            'isShow' => request('isShow'),
            'isNew' => request('isNew'),
            'isHot' => request('isHot'),
            'isLive' => request('isLive'),
            'isRWD' => request('isRWD'),
            'layout' => request('layout'),
            'style' => request('style'),
            'imgView' => request('imgView'),
            'imgBanner' => request('imgBanner'),
            'imgExampleName' => json_encode(request('imgExampleName')),
            'desktopChecked' => request('desktopChecked'),
            'tabletChecked' => request('tabletChecked'),
            'mobileChecked' => request('mobileChecked'),
        ]);
        return response()->json($edit);
        // return ['message' => 'Project Update!'];
    }
    public function getData()
    {
        $model = Project::searchPaginateAndOrder();
        $columns = Project::$columns;
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns
            ]);
    }
    
}

