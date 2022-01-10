import axios from "axios";

const uploadFile = async (body, setPercentage) => {
    try {
        const options = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                const percent = Math.floor((loaded * 100) / total);

                if (percent <= 100) {
                    setPercentage(percent);
                }
            }
        };

        const { data } = await axios.post(
            "https://nestjs-upload.herokuapp.com/",
            body,
            options
        );

        return data;
    } catch (error) {
        console.log(error.message);
    }
};

export default uploadFile;
