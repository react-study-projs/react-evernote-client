import React from 'react'
import { Layout, Button } from 'antd'
import { PlusOutlined, BookOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import style from './notebooks.module.scss'

const { Header, Content } = Layout

const Notebooks: React.FC = () => {
    return (
        <Layout>
            <Header className={style.header}>
                <Button
                    className={style.btn}
                    type="primary"
                    icon={<PlusOutlined className={style.plus} />}
                    size="small"
                >
                    新建笔记本
                </Button>
            </Header>
            <Layout>
                <Content className={style.main}>
                    <div className={style.layout}>
                        <h3>笔记本列表(3)</h3>
                        <div className={style['book-list']}>
                            <a className={style.notebook}>
                                <div className={style.left}>
                                    <BookOutlined className={style.icon} />
                                    笔记本标题1
                                    <span>&nbsp;&nbsp;10</span>
                                </div>
                                <div className={style.right}>
                                    <span>创建时间</span>
                                    <span>
                                        <DeleteOutlined />
                                    </span>
                                    <span>
                                        <EditOutlined />
                                    </span>
                                </div>
                            </a>
                            <a className={style.notebook}>
                                <div className={style.left}>
                                    <BookOutlined className={style.icon} />
                                    笔记本标题2
                                    <span>&nbsp;&nbsp;5</span>
                                </div>
                                <div className={style.right}>
                                    <span>创建时间</span>
                                    <span>
                                        <DeleteOutlined />
                                    </span>
                                    <span>
                                        <EditOutlined />
                                    </span>
                                </div>
                            </a>
                            <a className={style.notebook}>
                                <div className={style.left}>
                                    <BookOutlined className={style.icon} />
                                    笔记本标题
                                    <span>&nbsp;&nbsp;8</span>
                                </div>
                                <div className={style.right}>
                                    <span>创建时间</span>
                                    <span>
                                        <DeleteOutlined />
                                    </span>
                                    <span>
                                        <EditOutlined />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Notebooks
