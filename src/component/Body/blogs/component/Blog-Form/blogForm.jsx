import "./blogForm.css";
import React, { useState,useEffect } from "react";
import BreadCrumb from "../../../Reuseable/BreadCrumb";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {URL_API} from "../../../../variables";
import {Controller, useForm} from "react-hook-form";
import {FiUploadCloud} from "react-icons/all";
import {ProgressBar} from "../../../Reuseable/uploadfile/WidgetStyles";
import uploadFile from "../../../Reuseable/uploadfile/upload";
import SelectMultiple from "react-select";


function BlogForm() {
  const {
    register,
    handleSubmit,
    control,
      reset,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const [percentage, setPercentage] = useState(0);
  const [imgName, setImgName] = useState('')
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState({});

    useEffect(() => {
        const getServiesData = async () => {
            await fetch(URL_API+"auth/customer/articles/create")
                .then((responce) => responce.json())
                .then((data) => {
                    console.log("servicesfcgcgcfgfcgfc", data.tags);
                    setTags(data.tags);
                });
        };

        getServiesData();

    }, []);


  const onSubmit = (data) => {
    setLoading(true);
    console.log("some", data);
    let formData = new FormData();

    formData.append("image", data?.image[0]);
    formData.append("tags", data?.tags);
    formData.append("article_text", data.article_text);
    formData.append("title", data.title);


    axios
        .post(URL_API+"auth/customer/articles", formData)
        .then((response) => {
          console.log(response);
          setLoading(false);
            reset();

        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
  };


    const handleFile = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        console.log('file',file)
        setImgName(file.name)
        formData.append("image", file);

        await uploadFile(formData, setPercentage);
        setPercentage(100);
    };

  const DataValue = [
      {id:0,
  name:'hello'}, {id:1,
  name:'sd'}, {id:2,
  name:'asdfaf'}, {id:3,
  name:'asdfasf'}, {id:4,
  name:'helasdfasdflo'}]
  const options = DataValue.map((value) => ({
    label: value.name,
    value: value.id
  }));
  return (
    <div className="">
      <BreadCrumb />
      <div className="container my-5">

        <p className="blogPostHeading">Add Your Post</p>
        <div className="blogPostForm">
          <form onSubmit={handleSubmit(onSubmit)}>

              <div className={"form-field"}>
                <label className={'lablePost'}>Post Title</label>
                <input
                    className={"form-input"}
                    {...register("title", { required: true })}
                    name="title"
                    placeholder="Your Title"
                />
                {errors.title && errors.title.type === "required" && (
                    <span className="input-errors">Title is required</span>
                )}
              </div>

              <div className={'formGroup'}>
                <label className={'lablePost'}>Ad Description</label>
                <textarea name={'article_text'} {...register('article_text', {required: true})}  rows={'5'} type={'text'} className={'inputField'} placeholder={'Type Your Description'}/>
                {errors.article_text && errors.article_text.type === "required" &&
                <span className="input-error">Description is required</span>}
              </div>

            <div className={'row'}>



                <div className={'Wrapper'}>
                  <label className={'lablePost'}>Add Photos</label>
                  <div className={'WidgetWrapper'}>
                    <div className="uploadIcon">
                      <FiUploadCloud/>
                    </div>
                    <div className="right">
                      <p className={'text-left'}>Click here to upload your CV file</p>
                      <ProgressBar percentage={percentage} className="ProgressBar">
                        <div />
                      </ProgressBar>
                      <div>{imgName}</div>
                    </div>
                    <div className={'count'}>{percentage}%</div>

                    <input multiple accept=".jpg, .jpeg, .png" type="file"
                           name={'image'}
                           {...register('image', {required: true})}
                           onChange={handleFile} />

                  </div>
                  {errors.image && errors.image.type === "required" &&
                  <span className="input-errors">Image is required</span>}


                </div>


            </div>
            <div className={'formGroup mb-4'}>
              <label className={'lablePost'}>Tags</label>
              <div>
                <Controller
                    name={"tags"}
                    control={control}
                    defaultValue=""
                    rules={{
                      required: {
                        value: true,
                        message: 'Email  is Required'
                      }
                    }}
                    render={({ field: { value, onChange, onBlur, } }) => {
                      return (
                          <SelectMultiple
                              error={!!errors.tags}
                              options={options}
                              placeholder={"Choose..."}
                              isMulti={true}
                              onChange={(options) =>
                                  onChange(options?.map((option) => option.value))
                              }
                              onBlur={onBlur}
                              value={options.filter((option) => value?.includes(option.value))}
                              defaultValue={options.filter((option) =>
                                  value?.includes(option.value)
                              )}
                          />
                      );
                    }}
                />
                {errors.tags &&<span className="input-errors"> {errors.tags?.message} </span>}
              </div>

            </div>

            <div className={'col-12'}>
              <button type="submit" disabled={loading} className={'chooseWorkingBtn'}>
                Send Message
              </button>

            </div>


          </form>
        </div>

      </div>
    </div>
  );
}

export default BlogForm;
