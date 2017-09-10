export interface PersonList {
    count: number;
    next: string;
    previous: string | null;
    results: Person[];
}

export interface Person {
    id: number;
    name: string;
    age: number;
    phonenumber: string;
    missing_since: string;
    district: string;
    address: string;
    area: number;
    safe: boolean;
    extra_info: string;
    requester_name: string;
    requester_email: string;
    requester_fb: string;
    requester_number: string;
    emergency_contact_name: string;
    emergency_contact_number: string;
}

export interface AreaList {
    count: number;
    next: string;
    previous: string | null;
    results: Area[];
}

export interface Area {
    id: number;
    name: string;
}

export interface PersonParams {
    name: string;
    age?: number;
    phonenumber?: string;
    missing_since?: string | Date;
    district?: string;
    address?: string;
    area: number;
    safe?: boolean;
    extra_info?: string;
    requester_name?: string;
    requester_email?: string;
    requester_fb?: string;
    requester_number?: string;
    emergency_contact_name?: string;
    emergency_contact_number?: string;
}
