// EditJobModal.js (updated)
import React, { useEffect } from "react";
import { Modal, Form, Input } from "antd";
import { useJobManager } from "./JobManager";
import EmployerComboBox from "./EmployerComboBox";

const EditJobModal = ({ open, onCancel, onOk, initialValues }) => {
    const [form] = Form.useForm();
    const { employers = [] } = useJobManager(); // Default empty array

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        }
    }, [initialValues, form]);

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                onOk({
                    ...initialValues, // Use initialValues from props
                    ...values
                });
                form.resetFields();
            })
            .catch((error) => {
                Modal.error({ title: "Validation Failed", content: error.message });
            });
    };

    return (
        <Modal title="Edit Job" open={open} onOk={handleOk} onCancel={onCancel}>
            <Form form={form} layout="vertical">
                <Form.Item
                    name="title"
                    label="Job Title"
                    rules={[{ required: true, message: "Please input the job title!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="salary"
                    label="Salary"
                    rules={[{ required: true, message: "Please input the salary!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="employer_id"
                    label="Employer"
                    rules={[{ required: true }]}
                >
                    <EmployerComboBox />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditJobModal;
