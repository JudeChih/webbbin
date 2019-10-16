<?php
namespace App\Helper;
use Validator;
trait itemView {
    public function scopeSearchPaginateAndOrder($query)
    {
        $request = app()->make('request');
        $v = Validator::make($request->only([
            'column', 'direction', 'search_input', 'isRWD'
        ]), [
            'column' => 'required|alpha_dash|in:'.implode(',', self::$columns),
            'direction' => 'required|in:asc,desc',
            'search_input' => 'max:255',
            'isRWD' => 'required|boolean'
        ]);
        if($v->fails()) {
            throw new \Illuminate\Validation\ValidationException($v);
        }
        return $query
            ->orderBy($request->column, $request->direction, $request->isRWD)
            ->where(function($query) use ($request) {
                if($request->has('search_input')) {
                    $query->where('num', 'LIKE', '%'.$request->search_input.'%');
                };
                if($request->has('isRWD')) {
                    $query->where('isRWD', 'LIKE', '%'.$request->isRWD.'%');
                };
            })
            ->paginate(1000);
            
    }
}
