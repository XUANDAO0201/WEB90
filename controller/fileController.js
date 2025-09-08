import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dbygym2p0',
    api_key: '252563145881691',
    api_secret: 'emSDLH9v5WI5hfY1Nqh4oRk_mEY'
});

const fileController = {
    upload: async (req, res) => {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'Không có tệp được tải lên.' });
        }
        const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
        const fileName = file.originalname.split('.')[0];

        cloudinary.uploader.upload(dataUrl, {
            public_id: fileName,
            resource_type: 'auto',
            // có thể thêm field folder nếu như muốn tổ chức
        }, (err, result) => {
            if (result) {
                console.log(result.secure_url);
                res.status(200).send(result);
                // lấy secure_url từ đây để lưu vào database.
            }
        });
    }
}

export default fileController;