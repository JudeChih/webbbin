<?php
namespace App\Helper;
use Request;
use Validator;
trait itemView {
    public function scopeSearchPaginateAndOrder($query)
    {
        $request = app()->make('request');
        $search = Request::all();
        $v = Validator::make($request->only([
            'column', 'direction', 'search_input', 'pd_rwd', 'pd_show'
        ]), [
            'column' => 'required|alpha_dash|in:'.implode(',', self::$columns),
            'direction' => 'required|in:asc,desc',
            'search_input' => 'max:255',
            'pd_rwd' => 'required|boolean',
            'pd_show' => 'required|boolean'
        ]);
        if($v->fails()) {
            throw new \Illuminate\Validation\ValidationException($v);
        }
        // \App\Library\CommonTools::writeErrorLogByMessage(json_encode($request->column));
        return $query
            ->orderBy('pd_date','DESC')
            ->where('isflag',1)
            ->where(function($query) use ($request) {
                if($request->has('search_input')) {
                    $query->where('pd_num', 'LIKE', '%'.$request->search_input.'%');
                };
                if($request->has('pd_rwd')) {
                    $query->where('pd_rwd', 'LIKE', '%'.$request->pd_rwd.'%');
                };
                if($request->has('pd_show')) {
                    $query->where('pd_show', 'LIKE', '%'.$request->pd_show.'%');
                };
            })
            ->paginate(1000);
    }
}