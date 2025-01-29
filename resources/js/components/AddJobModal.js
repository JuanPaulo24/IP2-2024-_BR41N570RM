// AddJobModal.js (updated)
import React from "react";
import { Modal, Form, Input, InputNumber } from "antd";
import { useJobManager } from "./JobManager";
import EmployerComboBox from "./EmployerComboBox";

const AddJobModal = ({ open, onCancel, onOk }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                // Extract employerName and remove it from values
                const { employerName, ...restValues } = values;

                onOk({
                    ...initialValues,
                    ...restValues,
                    employer: {
                        ...initialValues?.employer, // Preserve existing employer properties
                        name: employerName // Update the name
                    }
                });
                form.resetFields();
            })
            .catch((info) => {
                console.log("Validate Failed:", info);
            });
    };

    return (
        <Modal title="Add New Job" open={open} onOk={handleOk} onCancel={onCancel}>
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
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name="employerName"
                    label="Employer"
                    rules={[{ required: true, message: "Please select an employer!" }]}
                >
                    <EmployerComboBox />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddJobModal;
