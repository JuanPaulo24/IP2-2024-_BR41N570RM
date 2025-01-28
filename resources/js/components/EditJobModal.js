import React, { useEffect } from "react"
import { Modal, Form, Input } from "antd"

const EditJobModal = ({ open, onCancel, onOk, initialValues }) => {
    const [form] = Form.useForm()

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues)
        }
    }, [initialValues, form])

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                onOk({ ...initialValues, ...values })
                form.resetFields()
            })
            .catch((info) => {
                console.log("Validate Failed:", info)
            })
    }

    return (
        <Modal title="Edit Job" open={open} onOk={handleOk} onCancel={onCancel}>
            <Form form={form} layout="vertical">
                <Form.Item name="title" label="Job Title" rules={[{ required: true, message: "Please input the job title!" }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="salary" label="Salary" rules={[{ required: true, message: "Please input the salary!" }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default EditJobModal

