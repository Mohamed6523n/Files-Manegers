<?php

namespace App\Http\Controllers;
use App\Models\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PdfController extends Controller
{

    public function UpLoad(){
        return view("upload");
    }

    public function store(Request $request){

       $data = $request->validate([
            "name"=>"required|string|max:255",
            "desc"=>"required|string",
            "file"=>"required"

        ]);

         $data['file'] = Storage::putFile("FIELS",$request['file']);

         Pdf::create($data);
         return redirect(url("allfiels"));
    }

     // show all pdfs
    public function allfiels(){

        $data = Pdf::all();
        return view('user\allFiles',compact("data"));

    }
    // show custome pdf
    public function views($id){

        $data = Pdf::find($id);
        return view('user.view',compact("data"));
    }


    public function translate(){
        return view('user.textTranslate');
    }

    public function delete($id){

            $FILE =  Pdf::findOrFail($id);

            Storage::delete($FILE->file);

            $FILE->delete();

            return redirect(url("allfiels"));
    }


    
    public function textedit(){
        return view('user.textEdite');
    }

    public function speech(){
        return view('user.textToSpecch');
    }



}
