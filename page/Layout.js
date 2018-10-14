import {Component} from 'react'
import {Icon,Tree, Layout, Menu} from 'antd'
import Link from 'umi/link';

const {Header, Footer, Sider, Content} = Layout
const SubMenu = Menu.SubMenu;

export default class Demo extends Component {
	state = {
		text: '',
		activeKey: '1'
	}
	onTextChange=(event) => {
		this.setState({
			text: event.target.value
		})
	}
	
	onTextReset =( ) => {
		this.setState({text: ''})
	}
	
	onTabChange = (activeKey) => {
		this.setState({activeKey})
	}
	
	render() {
		return (
			<Layout>
				<Sider width={256} style={{minHeight: '100vh',color: 'white'}}>
					<div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1">
							<Link to="/helloworld">
							<Icon type="pie-chart" />
							<span>Helloworld</span>
							</Link>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
						>
							<Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
							<Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
							<Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
							<Menu.Item key="5"><Link to="/dashboard/cards">卡片</Link></Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				
				<Layout>
					<Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>头部</Header>
					<Content style={{margin: '24px 16px 0'}}>
						<div style={{ padding: 12, background: '#fff', minHeight: 360 }}>
							{this.props.children}
						</div>
					</Content>
					<Footer style={{textAlign: 'center'}}>尾部</Footer>
				</Layout>
			</Layout>
		)
	}
	
}

const MyInput = ({value='',onChange}) => (
	<input type="text" value={value} onChange={onChange}/>
)

