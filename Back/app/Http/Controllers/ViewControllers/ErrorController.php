<?php

namespace App\Http\Controllers\ViewControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use \Illuminate\Support\Facades\View;
use App\Library\CommonTools;

class ErrorController extends Controller
{
	public function error(){
		try {
			$m_r = new \App\Repositories\MigrationsRepository;
			$result = $m_r->getFirstData();
			return View::make('errors/error',compact('result'));
		} catch (\Exception $e) {
			CommonTools::writeErrorLogByException($e);
			return view('errors.503');
		}
	}
}