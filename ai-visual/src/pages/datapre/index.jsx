import React from 'react'
import './index.css'
import MyTable from '../../utils/mytable'
import init1 from '../../assets/images/init_1_hop_conn 1.png'
import init2 from '../../assets/images/init_1_hop_conn 2.png'
import init3 from '../../assets/images/init_1_hop_conn 3.png'
import init4 from '../../assets/images/init_1_hop_conn 4.png'
import init5 from '../../assets/images/init_1_hop_conn 5.png'
import init6 from '../../assets/images/init_1_hop_conn 6.png'
import init7 from '../../assets/images/init_1_hop_conn 7.png'
import init8 from '../../assets/images/init_1_hop_conn 8.png'
import init9 from '../../assets/images/init_1_hop_conn 9.png'
import init10 from '../../assets/images/init_1_hop_conn 10.png'
import init11 from '../../assets/images/init_1_hop_conn 11.png'
import init12 from '../../assets/images/init_1_hop_conn 12.png'
import init13 from '../../assets/images/init_1_hop_conn 13.png'
import init14 from '../../assets/images/init_1_hop_conn 14.png'
import init15 from '../../assets/images/init_1_hop_conn 15.png'
import init16 from '../../assets/images/init_1_hop_conn 16.png'
import init17 from '../../assets/images/init_1_hop_conn 17.png'
import init18 from '../../assets/images/init_1_hop_conn 18.png'
import init19 from '../../assets/images/init_1_hop_conn 19.png'
import init20 from '../../assets/images/init_1_hop_conn 20.png'
import init21 from '../../assets/images/init_1_hop_conn 21.png'
import init22 from '../../assets/images/init_1_hop_conn 22.png'
import init23 from '../../assets/images/init_1_hop_conn 23.png'
import init24 from '../../assets/images/init_1_hop_conn 24.png'
import init25 from '../../assets/images/init_1_hop_conn 25.png'
import init26 from '../../assets/images/init_1_hop_conn 26.png'
import init27 from '../../assets/images/init_1_hop_conn 27.png'
import init28 from '../../assets/images/init_1_hop_conn 28.png'
import init29 from '../../assets/images/init_1_hop_conn 29.png'
import init30 from '../../assets/images/init_1_hop_conn 30.png'
import init31 from '../../assets/images/init_1_hop_conn 31.png'
import init32 from '../../assets/images/init_1_hop_conn 32.png'
import init33 from '../../assets/images/init_1_hop_conn 33.png'
import init34 from '../../assets/images/init_1_hop_conn 34.png'
import init35 from '../../assets/images/init_1_hop_conn 35.png'
import init36 from '../../assets/images/init_1_hop_conn 36.png'
import init37 from '../../assets/images/init_1_hop_conn 37.png'
import init38 from '../../assets/images/init_1_hop_conn 38.png'
import init39 from '../../assets/images/init_1_hop_conn 39.png'
import init40 from '../../assets/images/init_1_hop_conn 40.png'
import init51 from '../../assets/images/init_1_hop_conn 41.png'
import init52 from '../../assets/images/init_1_hop_conn 42.png'
import init53 from '../../assets/images/init_1_hop_conn 43.png'
import init54 from '../../assets/images/init_1_hop_conn 44.png'
import init55 from '../../assets/images/init_1_hop_conn 45.png'
import init56 from '../../assets/images/init_1_hop_conn 46.png'
import init57 from '../../assets/images/init_1_hop_conn 47.png'
import init58 from '../../assets/images/init_1_hop_conn 48.png'
import init59 from '../../assets/images/init_1_hop_conn 49.png'
import init50 from '../../assets/images/init_1_hop_conn 50.png'


export default function DataPre() {
  return (
    <div className="dataPre-container">
        <div className="dataPre">
            <h1 className="dataPre-title">HSBMAS - Hierarchical Switching-Backbone Multi-agent System</h1>
            <div className="dataPre-dataset">
                <h2 className="dataPre-dataset-head">1.Dateset</h2>
                <ul className="dataPre-premise">
                    <li><strong>Uniform-N:</strong> N agents are uniformly distributed over the semi open closed interval [-4, 4).</li>
                    <li><strong>Ring-N:</strong> N agents are randomly distributed on the ring with radius of 4.</li>
                    <li><strong>Vase-N:</strong> N agents are randomly distributed on the curve of Vase which is formed according to [3]</li>
                    <li><strong>Taiji-N:</strong> N-30 agents are uniformly distributed on the curve of Taiji. Besides, a vertical line composed of 30 agents is added to the center of Taiji to ensure initial connectivity.</li>
                    <li><strong>Circle-N :</strong> N agents are randomly distributed in the circle with radius of 4.</li>
                    <li><strong>Triangle-N:</strong> N agents are randomly distributed in equilateral triangle with side length 9.</li>
                    <li><strong>Square-N:</strong> N agents are randomly distributed in four concentric squares centered at the origin, the length of their sides from outside to inside are 1.6, 1.12, 0.64 and 0.16, respectively.</li>
                    <li><strong>Arch-N:</strong> 0.34N and 0.63N agents are randomly distributed on the curve of left and right 'archimedean spiral antenna' (abbr. 'Arch') respectively, and 0.03N agents are designed to connect two Archs. (Inspired by [4])</li>
                    <li><strong>Neat square-N:</strong> It is a neat topology generated by dividing a circle into 20 equal parts and placing an agent at equal radian intervals.</li>
                    <li><strong>Neat radiation-N:</strong> There are N agents neatly placed in a square area, the longitudinal and lateral gaps between nearest two agents are same.</li>
                </ul>
                <p>The statistics of these initial topologies with varying densities are shown in Table I which contains the number of edges of adjacency matrix (i.e. #A-edges).</p>
                <div className="dataPre-table">
                    <h3>Table I. The statistics of designed topologies in the same range <em>L</em> = 20r<sub>c</sub></h3>
                    <MyTable/>
                </div>
                <div className="dataPre-p">
                    <h3>1.1 ρ≈2</h3>
                    <div className="dataPre-p-content">
                        <img src={init1}/>
                        <img src={init2}/>
                        <img src={init3}/>
                        <img src={init4}/>
                        <img src={init5}/>
                        <img src={init6}/>
                        <img src={init7}/>
                        <img src={init8}/>
                        <img src={init9}/>
                        <img src={init10}/>
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    </div>
                </div>
                <div className="dataPre-p">
                    <h3>1.1 ρ≈4</h3>
                    <div className="dataPre-p-content">
                        <img src={init11}/>
                        <img src={init12}/>
                        <img src={init13}/>
                        <img src={init14}/>
                        <img src={init15}/>
                        <img src={init16}/>
                        <img src={init17}/>
                        <img src={init18}/>
                        <img src={init19}/>
                        <img src={init20}/>
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    </div>
                </div>
                <div className="dataPre-p">
                    <h3>1.1 ρ≈6</h3>
                    <div className="dataPre-p-content">
                        <img src={init21}/>
                        <img src={init22}/>
                        <img src={init23}/>
                        <img src={init24}/>
                        <img src={init25}/>
                        <img src={init26}/>
                        <img src={init27}/>
                        <img src={init28}/>
                        <img src={init29}/>
                        <img src={init30}/>
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    </div>
                </div>
                <div className="dataPre-p">
                    <h3>1.1 ρ≈8</h3>
                    <div className="dataPre-p-content">
                        <img src={init31}/>
                        <img src={init32}/>
                        <img src={init33}/>
                        <img src={init34}/>
                        <img src={init35}/>
                        <img src={init36}/>
                        <img src={init37}/>
                        <img src={init38}/>
                        <img src={init39}/>
                        <img src={init40}/>
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    </div>
                </div>
                <div className="dataPre-p">
                    <h3>1.1 ρ≈10</h3>
                    <div className="dataPre-p-content">
                        <img src={init51}/>
                        <img src={init52}/>
                        <img src={init53}/>
                        <img src={init54}/>
                        <img src={init55}/>
                        <img src={init56}/>
                        <img src={init57}/>
                        <img src={init58}/>
                        <img src={init59}/>
                        <img src={init50}/>
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    </div>
                </div>
                <p><strong>Each topology is saved with an **NPY** file created by **NumPy** library, researchers can read it with any NPY software interface. The file contains the state information of all agents, and this dataset only involves two-dimensional state. For example:</strong></p>
                <p className='dataPre-code'><strong>
                    [<br/>
                        &nbsp;&nbsp;[x1, y1], # the state of 1st agent <br/>
                        &nbsp;&nbsp;[x2, y2], # the state of 2nd agent <br/>
                        &nbsp;&nbsp;... <br/>
                        &nbsp;&nbsp;[xn, yn], # the state of n-th agent <br/>
                    ]
                </strong></p>
            </div>
            <div className="dataPre-license">
                <h2>2.License</h2>
                <p>The proposed dataset is released under the MIT License.</p>
            </div>
            <div className="dataPre-reference">
                <h2>3.Reference</h2>
                <p>
                    <strong>[1]</strong> Nedić A, Olshevsky A, Rabbat M G. Network topology and communication-computation tradeoffs in decentralized optimization[J]. Proceedings of the IEEE, 2018, 106(5): 953-976. <br/>
                    <strong>[2]</strong> Vicsek T, Czirók A, Ben-Jacob E, et al. Novel type of phase transition in a system of self-driven particles[J]. Physical review letters, 1995, 75(6): 1226-1229. <br/>
                    <strong>[3]</strong> Dongdong Zha, Di Zhang, Huayong Liu. Construction of smooth blending of three-parameter curves and optimization of parameters[J]. Journal of Graphics, 2020, 41(05): 725-732. (in Chinese) <br/>
                    <strong>[4]</strong> Kaiser J. The Archimedean two-wire spiral antenna[J]. IRE Transactions on Antennas and Propagation, 1960, 8(3): 312-323.<br/>
                </p>
            </div>
        </div>
    </div>
  )
}
