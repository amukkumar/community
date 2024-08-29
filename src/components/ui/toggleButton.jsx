"use client";
import React from "react";

// ToggleButton Component
const ToggleButton = ({ isSelected, onClick, children }) => {
    return (
        <div
            onClick={onClick}
            className={`px-3 py-1 text-xs font-medium rounded-full cursor-pointer ${isSelected ? "bg-primary text-white" : "bg-gray-200"
                }`}
        >
            {children}
        </div>
    );
};

// Toggle Component
const Toggle = ({ value, onChange, multiple = false, children }) => {
    const handleClick = (newValue) => {
        if (multiple) {
            if (Array.isArray(value)) {
                if (value.includes(newValue)) {
                    onChange(value.filter(v => v !== newValue));
                } else {
                    onChange([...value, newValue]);
                }
            } else {
                onChange([newValue]);
            }
        } else {
            onChange(newValue);
        }
    };

    return (
        <div className="flex flex-wrap gap-2 my-2">
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    isSelected: multiple
                        ? Array.isArray(value) && value.includes(child.props.value)
                        : child.props.value === value,
                    onClick: () => handleClick(child.props.value)
                })
            )}
        </div>
    );
};

export { Toggle, ToggleButton };