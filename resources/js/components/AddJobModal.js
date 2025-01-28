import React from "react"
import { Modal, Form, Input } from "antd"

const AddJobModal = ({ open, onCancel, onOk }) => {
    const [form] = Form.useForm()

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                onOk(values)
                form.resetFields()
            })
            .catch((info) => {
                console.log("Validate Failed:", info)
            })
    }

    return (
        <Modal title="Add New Job" open={open} onOk={handleOk} onCancel={onCancel}>
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

export default AddJobModal

