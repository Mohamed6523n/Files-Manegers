<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stichoza\GoogleTranslate\GoogleTranslate;

class langController extends Controller
{

    public function index(){

        $el ="";
     return view("user.textTranslate",compact('el'));

    }

    public function change(Request $request){
        $tr = new GoogleTranslate($request->lang_one);
       $el = $tr->setSource($request->lang_one)->setTarget($request->lang_tow)->translate($request->text);

        return view("user.textTranslate",compact('el'));
    }

}

