import { services } from '../data/services';
import { createNodeObject, generateFormDataFromParams } from './ReactFlowEvents';
import { NodeData, NodeParameter } from '../types/CanvasTypes';


export const getServiceFromId = (services: any, id: string) => {
    return services.find((service: any) => service.id === id);
}

export const isValidConnection = (services: any, nodes: any, sourceId: any, targetId: any) => {

    // loop over nodes to find source and target
    const sourceNode = nodes.find((node: any) => node.data.id === sourceId);
    const targetNode = nodes.find((node: any) => node.data.id === targetId);

    // get service data from source and target
    const sourceService = getServiceFromId(services, sourceNode?.data.serviceId);
    const targetService = getServiceFromId(services, targetNode?.data.serviceId);

    // if targetService is in sourceService.allowedConnections, return true
    if (targetService && sourceService?.allowedConnections?.includes(targetService.id)) {
        return true;
    }
    return false;   
}

export const addNodeToCanvasWithEdge = (services: any[], sourceId: string, service: any, setNodes: any, setEdges: any, sourcePosition: any, setActiveComponentId: any) => {
    
    const position = { x: sourcePosition.x, y: sourcePosition.y + 150 };
    const nodeId = Math.random().toString(36).substring(2, 9);
    const formData: NodeParameter[] = generateFormDataFromParams(service.parameters, nodeId);
    
    const nodeData = {
        id: nodeId,
        label: service.name,
        allowedConnections: service.allowedConnections,
        icon: service.icon,
        parameters: service.parameters,
        additionalInstructions: "",
        formData: formData,
        serviceId: service.id
    }
    
    const newNode = createNodeObject(nodeId, service.name, 'selectorNode', position, nodeData);
    
    // create new edge
    if (sourceId !== 'source'){

        const newEdge = {
            id: Math.random().toString(36).substring(2, 9),
            source: sourceId,
            target: nodeId,
            animated: true,
            arrowHeadType: 'arrowclosed',
            label: 'added w click',
            labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
            style: { stroke: '#f6ab6c' },
            type: 'smoothstep',
        };
        setEdges((eds: any) => eds.concat(newEdge));

    }

    setNodes((nds: any) => nds.concat(newNode));
    
    if (setActiveComponentId) setActiveComponentId(nodeId);
    return nodeId;
    
}

export const getWorkflowsFromGraph = (nodes: any, edges: any) => {

    if (nodes.length === 0) return [];
    // loop over edges and identify start nodes
    let startNodes: any = [];
    // if edge.source is not in edges.target, then it is a start node
    edges.forEach((edge: any) => {
        let isStartNode = true;
        edges.forEach((e: any) => {
            if (edge.source === e.target) {
                isStartNode = false;
            }
        });
        if (isStartNode) {
            startNodes.push(edge.source);
        }
    });

    // add start nodes that are not in edges.source or destination
    nodes.forEach((node: any) => {
        let isStartNode = true;
        edges.forEach((e: any) => {
            if (node.id === e.source || node.id === e.target) {
                isStartNode = false;
            }
        });
        if (isStartNode) {
            startNodes.push(node.id);
        }
    });



    // loop over start nodes and create workflows
    let workflows: any = [];
    startNodes.forEach((startNode: any) => {
        let workflow: any = [];
        let node = nodes.find((n: any) => n.id === startNode);
        workflow.push(node);
        let i = 0;
        while (i < edges.length) {
            let edge = edges[i];
            if (edge.source === node.id) {
                node = nodes.find((n: any) => n.id === edge.target);
                workflow.push(node);
                i = 0;
            } else {
                i++;
            }
        }
        workflows.push(workflow);
    });
    
    return workflows;
}

export const transformNodesToGQL = (nodes: any) => {

    let gqlNodes: any = [];

    nodes.forEach((node: any) => {
        let gqlNode: any = {};
        gqlNode = { ...node.data };
        gqlNode.reactNode = node;
        gqlNode.serviceId = node.data.serviceId // random value for now 
        // remove allowedConnections
        delete gqlNode.allowedConnections;
        delete gqlNode.icon;
        //delete gqlNode.serviceId;
        delete gqlNode.parameters;
        gqlNodes.push(gqlNode);
    });
    return gqlNodes;

}

export const transformEdgesToGQL = (edges: any) => {

    let gqlEdges: any = [];

    edges.forEach((edge: any) => {
        let gqlEdge: any = {};
        gqlEdge.source = edge.source;
        gqlEdge.target = edge.target;
        gqlEdge.reactEdge = edge;
        gqlEdge.id = "hello world" + Math.random() // random value for now 
        gqlEdges.push(gqlEdge);
    });
    return gqlEdges;
}


export const addNodesAndEdgesFromServiceIds = (services: any[], serviceIds: string[], setNodes: any, setEdges: any) => {

    // loop over serviceIds
    let previousNodeId : any = null;
    let baseX = 0;
    let baseY = 0;
    
    serviceIds.forEach((serviceId: string, index: number) => {
        // get service from serviceId
        const service = getServiceFromId(services, serviceId);
        // if index === 0, add node to canvas with edge
        if (index === 0) {
            // calculate random position on visible screen
            // x = random between 0 and 1000
            // y = random between 0 and 1000
            baseX = Math.floor(Math.random() * 1000);
            baseY = Math.floor(Math.random() * 1000);
            const sourcePosition = { x: baseX, y: baseY};
            
            previousNodeId = addNodeToCanvasWithEdge(services, 'source', service, setNodes, setEdges, sourcePosition, null);
        } else {
            // else, add node to canvas
            const sourcePosition = { x: baseX, y: baseY + (index * 150) };
            previousNodeId = addNodeToCanvasWithEdge(services, previousNodeId, service, setNodes, setEdges, sourcePosition, null);
        }
    });
}

export const addNodesAndEdgesFromBundle = (bundle: any, services: any, setNodes: any, setEdges: any) => {

    // get serviceIds from bundle
    const serviceIds = bundle.services.map((service: any) => service.id);
    addNodesAndEdgesFromServiceIds(services, serviceIds, setNodes, setEdges);
}

export const paramsFilledOnNode = (node: any) : Boolean => {
    // loop over node.formData
    let allFilled = true;
    node.data.formData.forEach((param: any) => {
        if (param.value === null) {
            allFilled = false;
        }
    });
    return allFilled;
}




