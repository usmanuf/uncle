import React from 'react';
// import '../FixerView/Skillpackage/styles.css';

const Name = () =>{
    return(
        <>

            <div className="absolute w-full z-9 flex flex-col">
                <div className="bg-bottom bg-no-repeat bg-cover"
                     // style="background-image:url('https://galaxy.up.video/media/backgrounds/bg-curve.svg')"
                >
                    <header className="z-20 w-full xl:px-0 px-2">
                        <div className="container mx-auto flex flex-wrap mt-8 mb-8 ">
                            <div className="flex sm:w-1/2 flex">
                                <svg version="1.1" id="isologo" xmlns="http://www.w3.org/2000/svg"
                                     xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     width="40px" height="40px" viewBox="0 0 399.998 399.997" xml="preserve">
                        <path fill="white" d="M292.41,236.617l-42.814-27.769c5.495-15.665,4.255-33.162-3.707-48.011l35.117-31.373
                        c19.292,12.035,45.001,9.686,61.771-7.085c19.521-19.52,19.521-51.171,0-70.692c-19.522-19.521-51.175-19.521-70.694,0
                        c-15.378,15.378-18.632,38.274-9.788,56.848l-35.121,31.378c-16.812-11.635-38.258-13.669-56.688-6.078l-40.5-55.733
                        c14.528-19.074,13.095-46.421-4.331-63.849c-19.004-19.004-49.816-19.004-68.821,0c-19.005,19.005-19.005,49.818,0,68.822
                        c13.646,13.646,33.374,17.491,50.451,11.545l40.505,55.738c-20.002,23.461-18.936,58.729,3.242,80.906
                        c0.426,0.426,0.864,0.825,1.303,1.237l-39.242,68.874c-16.31-3.857-34.179,0.564-46.899,13.286
                        c-19.521,19.522-19.521,51.175,0,70.694c19.521,19.521,51.173,19.521,70.693,0c19.317-19.315,19.508-50.503,0.593-70.069
                        l39.239-68.867c19.705,5.658,41.737,0.978,57.573-14.033l42.855,27.79c-2.736,12.706,0.821,26.498,10.696,36.372
                        c15.469,15.469,40.544,15.469,56.012,0c15.468-15.466,15.468-40.543,0-56.011C329.831,226.518,307.908,225.209,292.41,236.617z
                         M83.129,338.906c-0.951,1.078-1.846,2.096-2.724,2.973c-1.094,1.093-2.589,2.425-4.444,2.998
                        c-2.33,0.719-4.711,0.086-6.536-1.739c-4.772-4.771-2.947-13.799,4.246-20.989c7.195-7.195,16.219-9.021,20.993-4.247
                        c1.824,1.822,2.457,4.205,1.737,6.536c-0.572,1.855-1.904,3.354-2.997,4.444c-0.878,0.876-1.896,1.771-2.975,2.722
                        c-1.245,1.096-2.535,2.229-3.805,3.497C85.355,336.37,84.224,337.66,83.129,338.906z M279.56,59.17
                        c7.193-7.193,16.219-9.02,20.991-4.247c1.823,1.823,2.458,4.205,1.737,6.537c-0.572,1.856-1.905,3.354-2.997,4.446
                        c-0.876,0.875-1.894,1.77-2.974,2.72c-1.246,1.097-2.534,2.229-3.805,3.498c-1.271,1.271-2.403,2.562-3.5,3.808
                        c-0.948,1.076-1.846,2.097-2.72,2.973c-1.093,1.093-2.591,2.425-4.446,2.998c-2.332,0.719-4.712,0.086-6.536-1.739
                        C270.541,75.391,272.366,66.362,279.56,59.17z M73.322,37.854c-0.928,1.05-1.799,2.042-2.648,2.895
                        c-1.063,1.063-2.521,2.358-4.329,2.919c-2.269,0.698-4.587,0.083-6.364-1.691c-4.646-4.647-2.866-13.436,4.138-20.438
                        c7.003-7.004,15.788-8.782,20.436-4.135c1.776,1.776,2.395,4.095,1.692,6.363c-0.561,1.807-1.854,3.265-2.918,4.326
                        c-0.854,0.854-1.846,1.727-2.896,2.648c-1.213,1.066-2.469,2.17-3.704,3.406C75.492,35.384,74.387,36.642,73.322,37.854z
                         M159.967,155.76c8.593-8.594,19.371-10.774,25.073-5.073c2.18,2.181,2.937,5.024,2.078,7.81
                        c-0.688,2.218-2.277,4.005-3.583,5.312c-1.047,1.047-2.265,2.112-3.553,3.248c-1.486,1.311-3.026,2.662-4.544,4.179
                        c-1.518,1.519-2.87,3.058-4.178,4.547c-1.136,1.287-2.205,2.505-3.251,3.55c-1.306,1.31-3.093,2.896-5.311,3.582
                        c-2.784,0.859-5.628,0.104-7.811-2.077C149.189,175.132,151.374,164.354,159.967,155.76z M299.11,262.103
                        c-0.868,0.866-2.056,1.923-3.524,2.376c-1.846,0.569-3.729,0.068-5.178-1.377c-3.783-3.781-2.338-10.933,3.365-16.633
                        c5.697-5.7,12.849-7.146,16.632-3.362c1.443,1.443,1.945,3.33,1.376,5.179c-0.453,1.471-1.51,2.656-2.375,3.521
                        c-0.694,0.692-1.5,1.402-2.355,2.155c-0.984,0.866-2.008,1.766-3.013,2.771c-1.007,1.006-1.907,2.026-2.771,3.016
                        C300.512,260.604,299.802,261.409,299.11,262.103z"/>
                        </svg>
                                <a href="/" className="text-2xl text-white ml-1 font-bold">My Company</a>
                            </div>
                            <div className="w-1/2 hidden sm:flex justify-end">
                                <button
                                    className="border border-white bg-transparent text-white uppercase rounded-full py-2 px-4 hover:bg-blue-600">Get Started Now
                                </button>
                            </div>
                        </div>
                    </header>
                    <section className="w-full">
                        <div className="container mx-auto flex flex-row sm:items-center xl:pb-16 xl:px-0 px-4">
                            <div className="w-1/2 text-white flex flex-col">
                                <h1 className="sm:text-5xl text-xl font-weight-bolder sm:mb-4">Best app landin page for
                                    Apps Downloads.</h1>
                                <h2 className="sm:text-2xl text-base mb-2">Tailwind landing app theme.</h2>
                                <p className="text-xs sm:text-base">This is your text under h1 and h2. Write your main
                                    text promotional here.</p>
                                <form className="xl:mt-4 mt-8 flex hidden xl:flex">
                                    <input
                                        className="rounded-l-full p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                                        placeholder="your@mail.com"/>
                                    <button
                                        className="px-8 rounded-r-full bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe
                                    </button>
                                </form>
                                <p className="text-xs sm:block hidden">* Legal text</p>
                            </div>
                            <div className="w-1/2 xl:pt-8 xl:items-center flex justify-end">
                                <img className="xl:w-3/5"
                                     src="http://preview.uxtheme.website/xpider-preview/xpider/img/mobile-4.png"
                                     alt="Mobile phone"/>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="bg-white pb-8 w-full pt-8">
                    <div className="container mx-auto">
                        <form className="flex xl:hidden p-2 w-full justify-center pb-16">
                            <input
                                className="rounded-l-full p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                                placeholder="your@mail.com"/>
                            <button
                                className="px-2 rounded-r-full bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe
                            </button>
                        </form>
                        <div className="text-center w-full pb-16">
                            <h3 className="uppercase text-gray-800">Why choose my app?</h3>
                            <p className="sm:text-3xl text-2xl text-black-800 pt-4 xl:w-1/2 mx-auto">
                                A simple, proven way to boost your team perfomance.
                            </p>
                        </div>
                        <div className="flex sm:flex-row flex-col w-full xl:mt-12 mb-12 xl:px-0 px-4">
                            <div className="sm:w-1/3 mb-8 sm:mb-0 xl:pr-0 pr-2">
                                <div className="flex flex-wrap mb-4">
                                    <div className="w-1/6 items-center mx-auto">
                                        <svg height="40px" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                             xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 58.201 58.201"
                                            xml="preserve">
                                    <path
                                        d="M31.707,33.07c-0.87,0.027-1.74,0.042-2.606,0.042c-0.869,0-1.742-0.014-2.614-0.042 c-7.341-0.201-13.191-1.238-17.403-2.717C7.104,29.685,5.409,28.899,4.1,28v7.111v0.5v0.5V37.4c2.846,2.971,12.394,5.711,25,5.711                             s22.154-2.74,25-5.711v-1.289v-0.5v-0.5V28c-1.318,0.905-3.028,1.697-5.025,2.367C44.865,31.839,39.027,32.87,31.707,33.07z"/>
                                            <path
                                                d="M4.1,14.889V22v0.5V23v1.289c2.638,2.754,11.033,5.31,22.286,5.668c0.115,0.004,0.233,0.005,0.349,0.008 c0.326,0.009,0.651,0.018,0.982,0.023C28.174,29.996,28.635,30,29.1,30s0.926-0.004,1.383-0.011                             c0.33-0.005,0.656-0.014,0.982-0.023c0.116-0.003,0.234-0.005,0.349-0.008c11.253-0.359,19.648-2.915,22.286-5.668V23v-0.5V22                             v-7.111C49.233,18.232,38.944,20,29.1,20S8.968,18.232,4.1,14.889z"/>
                                            <path
                                                d="M53.965,8.542C52.843,4.241,44.215,0,29.1,0C14.023,0,5.404,4.22,4.247,8.51C4.162,8.657,4.1,8.818,4.1,9v0.5v1.806 C6.937,14.267,16.417,17,29.1,17s22.164-2.733,25-5.694V9.5V9C54.1,8.832,54.044,8.681,53.965,8.542z"/>
                                            <path
                                                d="M4.1,41v8.201c0,0.162,0.043,0.315,0.117,0.451c1.181,4.895,11.747,8.549,24.883,8.549c13.106,0,23.655-3.639,24.875-8.516 c0.08-0.144,0.125-0.309,0.125-0.484v-8.199c-4.135,2.911-12.655,5.199-25,5.199C16.754,46.201,8.234,43.911,4.1,41z"/>
                                </svg>
                                    </div>
                                    <div className="w-5/6"><h2 className="text-black items-center xl:text-2xl">One
                                        Platform</h2></div>
                                </div>
                                <p><b className="font-normal text-blue-600">No more Mulitple Platforms.</b> Now it had
                                    see nunable uneasy. Drawings can followed by improved out sociable not. Earnestly so
                                    do instantly pretended.</p>
                            </div>
                            <div className="sm:w-1/3 mb-8 sm:mb-0 xl:pr-0 pr-2">
                                <div className="flex flex-wrap mb-4">
                                    <div className="w-1/6 items-center mx-auto">
                                        <svg height="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                             xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 55 55"
                                             xml="preserve">
                                        <path
                                            d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752 c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348 c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98 c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033 c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55 c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287 c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104 c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1 c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764 l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5 c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957 c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545 c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.52,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8 s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.346-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545 c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313 c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z"/>
                                </svg>
                                    </div>
                                    <div className="w-4/5"><h2
                                        className="text-black items-center xl:text-2xl">Communication</h2></div>
                                </div>
                                <p><b className="font-normal text-blue-600">No more Mulitple Platforms.</b> Now it had
                                    see nunable uneasy. Drawings can followed by improved out sociable not. Earnestly so
                                    do instantly pretended.</p>
                            </div>
                            <div className="sm:w-1/3 mb-8 sm:mb-0 xl:pr-0 pr-2">
                                <div className="flex flex-wrap mb-4">
                                    <div className="w-1/6 items-center mx-auto">
                                        <svg height="40px" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                             xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 58.201 58.201"
                                             xml="preserve">
                                    <path
                                        d="M42.117,43.007c-0.55-0.067-1.046,0.327-1.11,0.876s0.328,1.046,0.876,1.11C52.399,46.231,58,49.567,58,51.5 c0,2.714-10.652,6.5-28,6.5S2,54.214,2,51.5c0-1.933,5.601-5.269,16.117-6.507c0.548-0.064,0.94-0.562,0.876-1.11 c-0.065-0.549-0.561-0.945-1.11-0.876C7.354,44.247,0,47.739,0,51.5C0,55.724,10.305,60,30,60s30-4.276,30-8.5 C60,47.739,52.646,44.247,42.117,43.007z"/>
                                            <path
                                                d="M29.823,54.757L45.164,32.6c5.754-7.671,4.922-20.28-1.781-26.982C39.761,1.995,34.945,0,29.823,0 s-9.938,1.995-13.56,5.617c-6.703,6.702-7.535,19.311-1.804,26.952L29.823,54.757z M30,12c3.86,0,7,3.141,7,7s-3.14,7-7,7 s-7-3.141-7-7S26.14,12,30,12z"/>
                                </svg>
                                    </div>
                                    <div className="w-4/5"><h1 className="text-black items-center xl:text-2xl">Project
                                        Management</h1></div>
                                </div>
                                <p><b className="font-normal text-blue-600">No more Mulitple Platforms.</b> Now it had
                                    see nunable uneasy. Drawings can followed by improved out sociable not. Earnestly so
                                    do instantly pretended.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Name;
