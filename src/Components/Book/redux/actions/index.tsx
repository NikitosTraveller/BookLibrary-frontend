import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../../../appconfig";
import { BookModel } from "../../../../Models/BookModel";

export const getBooksAsync = createAsyncThunk(
    'bookSlice/getBooks',
    async () => {
        const response = await axios.get(apiUrl + 'book/books')
        .catch(err => {
            console.log(err);
        });
        return response['data'];
    }
  );

  export const getBookAsync = createAsyncThunk(
    'bookSlice/getBook',
    async (bookId : string) => {
        const response = await axios.get(apiUrl + 'book/books/' + bookId)
        .catch(err => {
            console.log(err);
        });
        return response['data'];
    }
  );

  export const deleteBookAsync = createAsyncThunk(
    'bookSlice/deleteBook',
    async (bookId : number) => {
        const response = await axios.delete(apiUrl + "book/delete/" + bookId)
        .catch(err => {
            console.log(err);
        });
        return response["data"];
    }
  );

  export const uploadBookAsync = createAsyncThunk(
    'bookSlice/uploadBook',
    async (formData : FormData) => {
        const response = await axios
        .post(apiUrl + "book/upload", formData)
        .catch(err => {
            console.log(err);
        });
        return response['data'];
    }
  );

  export const downloadBookAsync = createAsyncThunk(
    'bookSlice/downloadBook',
    async (bookModel: BookModel) => {
        const response = await axios
        .post(apiUrl + "book/download/" + bookModel.id, null, {
            responseType: "arraybuffer",
        }).then(response => response.data).then(result => {

            let blob = new Blob([result]);
            let link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = bookModel.name;
            document.body.appendChild(link);
            link.click();
        })
        .catch(err => {
            console.log(err);
        });
        return response["data"];
    }
  );
  