import './App.css';
// import 'antd/dist/antd.css';
import { Typography } from 'antd';

const { Title, Text } = Typography;

function App() {
  return (
    <div className="App">
      <Title level={3}>Algorithms</Title>
      <Title level={4}>Searching Algorithms</Title>
        <Text>Linear Search<br/></Text>
        <Text>Binary Search<br/></Text>
        <Text>Quick Select<br/></Text>
        <Text>Median of Medians</Text>
      <Title level={4}>Sorting Algorithms</Title>
        <Text>Selection Sort<br/></Text>
        <Text>Bubble Sort<br/></Text>
        <Text>Insertion Sort<br/></Text>
        <Text>Merge Sort<br/></Text>
        <Text>Quick Sort<br/></Text>
        <Text>Heap Sort<br/></Text>
        <Text>Radix Sort<br/></Text>
        <Text>Tim Sort<br/></Text>
        <Text>Bubble Sort<br/></Text>
      <Title level={4}>Graph Algorithms</Title>
        <Text>Tarjan's Articulation Points<br/></Text>
        <Text>Topological Sort<br/></Text>
        <Text>Kosarajus Strongly Connected Components<br/></Text>
      <Title level={5}>Graph Traversal</Title>
        <Text>Depth First Search</Text>
        <Text>Breadth First Search</Text>
      <Title level={5}>Shortest Path Algorithms</Title>
        <Text>Djikstra's Algorithm<br/></Text>
      <Title level={5}>Minimum Spanning Trees</Title>
        <Text>Prim's Algorithm<br/></Text>
        <Text>Kruskal's Algorithm<br/></Text>
        <Text>Kruskal's w/ Union Find</Text>
      <Title level={4}>Dynamic Programming</Title>
      <Title level={4}>Heuristic Algorithms</Title>
      
    </div>
  );
}

export default App;
