import React from 'react';

interface ElevenLabsVoiceWidgetProps {
  agentId?: string;
  className?: string;
}

const ElevenLabsVoiceWidget: React.FC<ElevenLabsVoiceWidgetProps> = ({ 
  agentId = "agent_8701k5r5amsbfqj86v8g9b2cjqkk",
  className = ""
}) => {
  return (
    <div className={`elevenlabs-widget-container ${className}`}>
      <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>      
    </div>
  );
};

export default ElevenLabsVoiceWidget;