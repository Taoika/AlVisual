import { DeleteFilled } from '@ant-design/icons';
import { InputNumber, Button, Space } from 'antd'
import React from 'react'
import './index.css'
import CavSider from '../../component/cavSider';

export default function CavClassic() {
  return (
    <div className="cavClassic">
		<CavSider/>
      	<div className="cavClassic-right">
			<div className="cavClassic-right-del">
				<Button><Space>Del <DeleteFilled /></Space></Button>
			</div>
		</div>
    </div>
  )
}
